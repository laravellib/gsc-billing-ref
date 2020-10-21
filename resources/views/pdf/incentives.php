<?php 
    // header('Content-type: application/excel');
    // $filename = 'eNGASBugemco-'. date('mdY') .'.xls';
	// header('Content-Disposition: attachment; filename='.$filename);
	if($records != 'fail'){
		foreach($records as $record){
			$SOANo = $record->SOANo;
			$date = date('F j, Y', strtotime($record->Date));
			$Prepared_by = $record->Prepared_by;
			$Prepared_by_desig = $record->Prepared_by_desig;
			break;
		}
	}
	$total = 0;
?>
	<html xmlns:x="urn:schemas-microsoft-com:office:excel">
		<head>
		</head>
		<style>
			body {
				font-family: 'Courier New';
			}

			table {
				border-spacing: -1px;
				border-width:thin;
			}

			td {
				font-size: 100%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Legal-L; }
			
			@page {
				margin-top: 1cm;
				margin-bottom: 1cm;
				margin-left: 0.5cm;
				margin-right: 0.5cm;
				odd-footer-name: html_myFooter;
			}
			
			h1.bigsection {
					page-break-before: always;
					page: bigger;
			}

			.main_t td, th{
				border:1px solid black;
			}

			th {
				font-size: 100%;
				padding: 5px;
				text-align:center;
			}
	
		</style>
		<body>
			<?php if($records != 'fail'): ?>
			<table width="100%">
				<tr>
					<td style="width:20%;text-align:center;"><img src="http://192.168.1.250/epis/static/img/gsclogo.png" alt="GSC Logo" style="width:8%;"></td>
					<td style="width:80%;text-align:center;padding-left:-20%;">
						<h1 style="text-align:center;">GENERAL SERVICES MULTIPURPOSE COOPERATIVE</h1>
						<h4 style="text-align:center;">BORJA ROAD, DAMILAG, MANOLO FORTICH, BUKIDNON</h4>
						<br>
						<h2 style="text-align:center;">STATEMENT OF ACCOUNT</h2>
					</td>
				</tr>
			</table>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td style="width:100%;font-weight:bold;font-size:120%;">SOA#<?php echo $SOANo; ?></td>
				</tr>
			</table>
			<table width="100%" class="main_t">
				<thead>
					<tr style="background:lightgrey;">
						<th style="width:10%;padding:20px 0;">DATE</th>
						<th style="width:30%;padding:20px 0;">FULLNAME</th>
						<th style="width:15%;padding:20px 0;">INCENTIVE AMOUNT</th>
						<th style="width:15%;padding:20px 0;">ADMIN FEE</th>
						<th style="width:15%;padding:20px 0;">TOTAL AMOUNT</th>
						<th style="width:20%;padding:20px 0;" colspan="2">ACCOUNT to CHARGE</th>
					</tr>
					<tr>
						<td colspan="5"></td>
						<th style="background:lightgrey;">GL</th>
						<th style="background:lightgrey;">CC</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach($records as $record): ?>
					<?php $ExtName = $record->ExtName != "" ? " " . $record->ExtName : ""; ?>
					<?php $MName = $record->MName != "" ?  " " . substr($record->MName, 0, 1) . "." : ""; ?>
					<tr>
						<td><?php echo $record->Date; ?></td>
						<td><?php echo $record->LName . $ExtName . ", " . $record->FName . $MName; ?></td>
						<td style="text-align:right;"><?php echo number_format((float)$record->Amount, 2, '.', ','); ?></td>
						<td style="text-align:right;"><?php echo number_format((float)$record->admin_fee, 2, '.', ','); ?></td>
						<td style="text-align:right;"><?php echo number_format((float)$record->subAmount, 2, '.', ','); ?></td>
						<td style="text-align:center;"><?php echo $record->GL; ?></td>
						<td style="text-align:center;"><?php echo $record->CC; ?></td>
					</tr>
					<?php $total = $total + $record->subAmount; ?>
					<?php endforeach; ?>
					<tr>
						<td colspan="3" style="color:red;border:none;font-weight:bold;">TOTAL</td>
						<td style="border-left:none;border-bottom:3px double black;"></td>
						<td style="text-align:right;border-bottom:3px double black;"><?php echo number_format((float)$total, 2, '.', ','); ?></td>
						<td style="border:none;" colspan="2"></td>
					</tr>
				</tbody>
			</table>
			<br>
			<br>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td>
						<table width="20%">
							<tr>
								<td style="width:100%;font-weight:bold;">Prepared By:</td>
							</tr>
							<tr>
								<td style="font-weight:bold;"><?php echo $Prepared_by; ?></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			<?php else: ?>
			NO DATA FOUND...
			<?php endif; ?>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				<div style="text-align: center;font-weight:bold;font-size:90%;">
					<!-- Page {PAGENO} of {nbpg} -->
				</div>
			</htmlpagefooter>
		</body>
	</html>
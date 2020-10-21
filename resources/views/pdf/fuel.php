<?php 
    // header('Content-type: application/excel');
    // $filename = 'eNGASBugemco-'. date('mdY') .'.xls';
	// header('Content-Disposition: attachment; filename='.$filename);
	if($records != 'fail'){
		foreach($records as $record){
			$SOANo = $record->SOANo;
			$date = date('F j, Y', strtotime($record->date_created));
			$Prepared_by = $record->Prepared_by;
			$Prepared_by_desig = $record->Prepared_by_desig;
			$Checked_by = $record->Checked_by;
			$Checked_by_desig = $record->Checked_by_desig;
			$Noted_by = $record->Noted_by;
			$Noted_by_desig = $record->Noted_by_desig;
			$Approved_by2 = $record->Approved_by2;
			$Approved_by_desig2 = $record->Approved_by_desig2;
			$Approved_by = $record->Approved_by;
			$Approved_by_desig = $record->Approved_by_desig;
			$GL = $record->GL;
			$CC = $record->CC;
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

			.padding-none {
				padding:none;
			}
	
			@page { sheet-size: Legal; }
			
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
					<td style="width:20%;"><img src="http://192.168.1.250/epis/static/img/gsclogo.png" alt="GSC Logo" style="width:8%;"></td>
					<td style="width:80%;text-align:center;padding-left:-20%;">
						<h1 style="text-align:center;">GENERAL SERVICES MULTIPURPOSE COOPERATIVE</h1>
						<h4 style="text-align:center;">BORJA ROAD, DAMILAG, MANOLO FORTICH, BUKIDNON</h4>
						<h3 style="text-align:center;text-decoration:underline;">STATEMENT OF ACCOUNT</h3>
						<h6 style="text-align:center;">TIN Number: 411-478-949</h6>
					</td>
				</tr>
			</table>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td style="width:30%;padding:1px;"></td>
					<td style="width:40%;padding:1px;"></td>
					<td style="width:30%;padding:1px;"><b>Date</b> : <?php echo $date; ?></td>
				</tr>
				<tr>
					<td style="padding:1px;"></td>
					<td style="padding:1px;"></td>
					<td style="padding:1px;"><b>Control No.</b> : <?php echo $SOANo; ?></td>
				</tr>
				<tr>
					<td style="padding:1px;">Del Monte Philippines, inc.</td>
					<td style="padding:1px;"></td>
					<td style="padding:1px;">Account to Charge</td>
				</tr>
				<tr>
					<td style="padding:1px;">Camp Administration Office</td>
					<td style="padding:1px;"></td>
					<td style="padding:1px;"><b>GL</b> : <?php echo $GL; ?></td>
				</tr>
				<tr>
					<td style="padding:1px;"><b>To : Mr. Edgardo Valiente</b></td>
					<td style="padding:1px;"></td>
					<td style="padding:1px;"><b>CC</b> : <?php echo $CC; ?></td>
				</tr>
				<tr>
					<td colspan="3" style=""><br><br>Payment of Fuel Consumption<br>Period Covered :</td>
				</tr>
			</table>
			<br>
			<br>
			<table width="100%" class="main_t">
				<thead>
					<tr style="background:lightgrey;">
						<th style="width:20%;padding:20px 0;">DATE</th>
						<th style="width:30%;padding:20px 0;">ITEM</th>
						<th style="width:10%;padding:20px 0;">QUANTITY</th>
						<th style="width:10%;padding:20px 0;">UNIT</th>
						<th style="width:15%;padding:20px 0;">UNIT PRICE</th>
						<th style="width:15%;padding:20px 0;">AMOUNT</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach($records as $record): ?>
					<tr>
						<td><?php echo date("F j, Y", strtotime($record->date_created)); ?></td>
						<td><?php echo $record->Description; ?></td>
						<td style="text-align:center;"><?php echo $record->Qty; ?></td>
						<td style="text-align:center;"><?php echo $record->Unit; ?></td>
						<td style="text-align:right;"><?php echo number_format((float)$record->subPrice, 2, '.', ','); ?></td>
						<td style="text-align:right;"><?php echo number_format((float)$record->subAmount, 2, '.', ','); ?></td>
					</tr>
					<?php $total = $total + $record->subAmount; ?>
					<?php endforeach; ?>
					<tr>
						<td colspan="5" style="text-align:right;color:red;border:none;font-weight:bold;">TOTAL AMOUNT</td>
						<td style="text-align:right;border-bottom:3px double black;"><?php echo number_format((float)$total, 2, '.', ','); ?></td>
					</tr>
				</tbody>
			</table>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td>
						<table width="100%">
							<tr>
								<td style="width:20%;font-weight:bold;">Prepared By:</td>
								<td style="width:5%;font-weight:bold;"></td>
								<td style="width:20%;font-weight:bold;">Verified & Checked By:</td>
								<td style="width:5%;font-weight:bold;"></td>
								<td style="width:20%;font-weight:bold;">Noted By:</td>
								<td style="width:5%;font-weight:bold;"></td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td style="font-weight:bold;text-align:center;"><?php echo $Prepared_by; ?></td>
								<td style="font-weight:bold;"></td>
								<td style="font-weight:bold;text-align:center;"><?php echo $Checked_by; ?></td>
								<td style="font-weight:bold;"></td>
								<td style="font-weight:bold;text-align:center;"><?php echo $Noted_by; ?></td>
								<td style="font-weight:bold;"></td>
							</tr>
							<tr>
								<td style="border-top:1px solid black;text-align:center;"><?php echo $Prepared_by_desig; ?></td>
								<td style=""></td>
								<td style="border-top:1px solid black;text-align:center;"><?php echo $Checked_by_desig; ?></td>
								<td style=""></td>
								<td style="border-top:1px solid black;text-align:center;"><?php echo $Noted_by_desig; ?></td>
								<td style=""></td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td style="width:20%;font-weight:bold;">Prepared for payment:</td>
								<td style="width:5%;font-weight:bold;"></td>
								<td style="width:20%;font-weight:bold;"></td>
								<td style="width:5%;font-weight:bold;"></td>
								<td style="width:20%;font-weight:bold;"></td>
								<td style="width:5%;font-weight:bold;"></td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td style="font-weight:bold;text-align:center;"><?php echo $Approved_by; ?></td>
								<td style="font-weight:bold;"></td>
								<td style=""></td>
								<td style="font-weight:bold;"></td>
								<td style="font-weight:bold;text-align:center;"><?php echo $Approved_by2; ?></td>
								<td style="font-weight:bold;"></td>
							</tr>
							<tr>
								<td style="border-top:1px solid black;text-align:center;"><?php echo $Approved_by_desig; ?></td>
								<td style=""></td>
								<td style=""></td>
								<td style=""></td>
								<td style="border-top:1px solid black;text-align:center;"><?php echo $Approved_by_desig2; ?></td>
								<td style=""></td>
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
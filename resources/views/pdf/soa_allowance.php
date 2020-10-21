<?php 
    // header('Content-type: application/excel');
    // $filename = 'eNGASBugemco-'. date('mdY') .'.xls';
	// header('Content-Disposition: attachment; filename='.$filename);
	$to = "";
	$thru = "";
	$body = "";
	if($records != 'fail'){
		foreach($records as $record){
			$SOANo = $record->SOANo;
			$billed_amount = $record->billed_amount;
			$admin_fee = $record->admin_fee;
			$markup = $record->markup;
			$gl = $record->gl;
			$cc = $record->cc;
			$Prepared_by = $details['Prepared_by'];
			$Checked_by = $details['Checked_by'];
			$Noted_by = $details['Noted_by'];
			$Approved_by = $details['Approved_by'];
			$type = $record->type;
			break;
		}
		if(count($records2) > 0){
			foreach($records2 as $record){
				$to = $record->to;
				$thru = $record->thru;
				$body = $record->body;
				$body2 = $record->body2;
			}
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
				font-size: 120%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Letter; }
			
			@page {
				margin-top: 1cm;
				margin-bottom: 1cm;
				margin-left: 1.5cm;
				margin-right: 1cm;
				odd-footer-name: html_myFooter;
			}
			
			h1.bigsection {
					page-break-before: always;
					page: bigger;
			}

			.main_t td{
				border:1px solid black;
				border-bottom: none;
				border-top: none;
			}

			th {
				font-size: 100%;
				padding: 5px;
				text-align:center;
			}
	
		</style>
		<body>
			<?php if($records != 'fail'): ?>
			<h2 style="text-align:center;">GENERAL SERVICES MULTIPURPOSE COOPERATIVE</h2>
			<h4 style="text-align:center;">BORJA ROAD, DAMILAG</h4>
			<h3 style="text-align:center;">STATEMENT OF ACCOUNT</h3>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td colspan="2"><?php echo nl2br($to); ?></td>
					<td style="width:35%;">SOA # <?php echo $SOANo; ?><br>GL ACCT: <?php echo $gl; ?><br>CC: <?php echo $cc; ?></td>
				</tr>
				<tr>
					<td style=""><?php echo nl2br($thru); ?></td>
					<td style=""></td>
					<td style=""></td>
				</tr>
				<tr>
					<td colspan="3" style="font-size:130%;"><br><br><?php echo nl2br($body); ?></td>
				</tr>
				<tr>
					<td style="width:45%;font-size:160%;text-align:right;">Total Amount</td>
					<td style="width:20%;font-size:160%;"></td>
					<td style="width:35%;font-size:160%;text-align:right;padding-right:130px;"><?php echo number_format((float)$billed_amount - $admin_fee, 2, '.', ','); ?></td>
				</tr>
				<tr>
					<td style="width:45%;font-size:160%;text-align:right;">Add: <?php echo $markup; ?>% <?php echo $type=='ALLOWANCE' ? "Admin Fee" : "Mark Up"; ?></td>
					<td style="width:20%;font-size:160%;"></td>
					<td style="width:35%;font-size:160%;text-align:right;padding-right:130px;"><?php echo number_format((float)$admin_fee, 2, '.', ','); ?></td>
				</tr>
				<tr>
					<td style="width:45%;font-size:160%;text-align:right;">Grand Total:</td>
					<td style="width:20%;font-size:160%;"></td>
					<td style="width:35%;font-size:160%;text-align:right;padding-right:130px;"><?php echo number_format((float)$billed_amount, 2, '.', ','); ?></td>
				</tr>
				<tr>
					<td colspan="3" style="font-size:130%;"><br><br><?php echo nl2br($body2); ?></td>
				</tr>
			</table>
			<br>
			<br>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td>
						<table width="100%">
							<tr>
								<td style="width:45%;"><i>Prepared & checked by:</i></td>
								<td style="width:10%;"></td>
								<td style="width:45%;"><i>Approved for payment by:</i></td>
							</tr>
							<tr>
								<td><i><br><?php echo $details['Prepared_by'] . "/" . $details['Checked_by']; ?><br>GSC BILLING CLERK</i></td>
								<td></td>
								<td><i><br><?php echo $details['Approved_by']; ?><br>SENIOR MANAGER<br>HR-Plantation</i></td>
							</tr>
							<tr>
								<td style="width:45%;"><br><i>Noted by:</i></td>
								<td style="width:10%;"></td>
								<td style="width:45%;"><i></i></td>
							</tr>
							<tr>
								<td><i><br><?php echo $details['Noted_by']; ?><br>GSC GENERAL MANAGER</i></td>
								<td></td>
								<td></td>
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
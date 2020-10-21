<?php 
    // header('Content-type: application/excel');
    // $filename = 'eNGASBugemco-'. date('mdY') .'.xls';
	// header('Content-Disposition: attachment; filename='.$filename);
	if($records != 'fail'){
		foreach($records as $record){
			$bill = $record->billedTo;
			$date = date('F j, Y', strtotime($record->Date));
			$TIN = $record->TIN;
			$Address = $record->Address;
			$SOANo = $record->SOANo;
			$amount = $record->TotalAmount;
			$Prepared_by = $record->Prepared_by;
			$Prepared_by_desig = $record->Prepared_by_desig;
			$Noted_by = $record->Noted_by;
			$Noted_by_desig = $record->Noted_by_desig;
			$Approved_by = $record->Approved_by;
			$Approved_by_desig = $record->Approved_by_desig;
			$Approved_by2 = $record->Approved_by2;
			$Approved_by2_desig = $record->Approved_by2_desig;
			$var_period = explode("-", $record->Period);
			$end_day_of_period = date('Y-F-t', strtotime(substr($var_period[0], 0, 4) . "-" . substr($var_period[0], -2) . "-01"));
			$var_end_day = explode("-", $end_day_of_period);
			if((int)$var_period[1] == 1){
				$days = "1-15";
			}else{
				$days = "16-" . $var_end_day[2];
			}
			$period = $var_end_day[1] . " " . $days . ", " . $var_end_day[0];
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
	
			@page { sheet-size: Letter-L; }
			
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
			<h4 style="text-align:center;">BORJA ROAD, DAMILAG<br><br>NON-VAT Reg. TIN: 441-478-949-000<br><br><b style="font-size:110%;">CULTURE</b></h4>
			<h3 style="text-align:center;">STATEMENT OF ACCOUNT</h3>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td style="width:20%"><b>Billed To:</b></td>
					<td style="width:30%;border-bottom:1px solid black;"><i><b><?php echo $bill; ?></b></i></td>
					<td style="width:10%;"></td>
					<td style="width:20%;text-align:right;"><b>Date:</b></td>
					<td style="width:20%;border-bottom:1px solid black;"><?php echo $date; ?></td>
				</tr>
				<tr>
					<td><b>TIN:</b></td>
					<td style="border-bottom:1px solid black;"><?php echo $TIN; ?></td>
					<td colspan="3"></td>
				</tr>
				<tr>
					<td><b>Address:</b></td>
					<td style="border-bottom:1px solid black;"><?php echo $Address; ?></td>
					<td></td>
					<td style="text-align:right;"><b>SOA No:</b></td>
					<td style="border-bottom:1px solid black;"><?php echo $SOANo; ?></td>
				</tr>
			</table>
			<br>
			<br>
			<table width="100%">
				<tr>
					<td style="width:20%"><b>Period Coverage:</b></td>
					<td style="width:20%;border-bottom:1px solid black;"><?php echo $period; ?></td>
					<td style="width:20%;"></td>
					<td style="width:20%;text-align:right;"><b>Total Amount:</b></td>
					<td style="width:20%;border-bottom:1px solid black;font-size:120%;"><b><?php echo number_format((float)$amount, 2, '.', ','); ?></b></td>
				</tr>
			</table>
			<br>
			<table width="100%" border="1">
				<thead>
					<tr>
						<th>Name</th>
						<th>Man Days</th>
						<th>GL Account</th>
						<th>Cost Center</th>
						<th>Gasoline</th>
						<th>Communication</th>
						<th>MC Rental & Maint</th>
						<th>Others</th>
						<th>Admin Fee</th>
						<th>Total Amount</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach($records as $record): ?>
					<?php $ExtName = $record->ExtName != "" ? " " . $record->ExtName : ""; ?>
					<?php $MName = $record->MName != "" ?  " " . substr($record->MName, 0, 1) . "." : ""; ?>
					<tr>
						<td><?php echo $record->LName . $ExtName . ", " . $record->FName . $MName; ?></td>
						<td style="text-align:right;"><?php echo $record->manDays; ?></td>
						<td><?php echo $record->GL; ?></td>
						<td><?php echo $record->CostCenter; ?></td>
						<td style="text-align:right;"><?php echo $record->Gasoline > 0 ? number_format((float)$record->Gasoline, 2, '.', ',') : ""; ?></td>
						<td style="text-align:right;"><?php echo $record->Communication > 0 ? number_format((float)$record->Communication, 2, '.', ',') : ""; ?></td>
						<td style="text-align:right;"><?php echo $record->RentalMaintenance > 0 ? number_format((float)$record->RentalMaintenance, 2, '.', ',') : ""; ?></td>
						<td style="text-align:right;"><?php echo $record->Others > 0 ? number_format((float)$record->Others, 2, '.', ',') : ""; ?></td>
						<td style="text-align:right;"><?php echo $record->AdminFee > 0 ? number_format((float)$record->AdminFee, 2, '.', ',') : ""; ?></td>
						<td style="text-align:right;"><?php echo $record->SubTotal > 0 ? number_format((float)$record->SubTotal, 2, '.', ',') : ""; ?></td>
					</tr>
					<?php $total = $total + $record->SubTotal; ?>
					<?php endforeach; ?>
					<tr>
						<td colspan="8" style="text-align:right;font-weight:bold;padding-right:50px;">TOTAL AMOUNT DUE </td>
						<td colspan="2" style="text-align:right;font-weight:bold;"><?php echo number_format((float)$total, 2, '.', ','); ?></td>
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
						<table width="100%">
							<tr>
								<td style="width:20%;font-weight:bold;">Prepared By:</td>
								<td style="width:5%;"></td>
								<td style="width:20%;font-weight:bold;">Noted By:</td>
								<td style="width:5%;"></td>
								<td style="width:20%;font-weight:bold;">Approved By:</td>
								<td style="width:5%;"></td>
								<td style="width:20%;font-weight:bold;">Approved By:</td>
								<td style="width:5%;"></td>
							</tr>
							<tr>
								<td colspan="8">&nbsp;</td>
							</tr>
							<tr>
								<td style="border-bottom:1px solid black;"><?php echo $Prepared_by; ?></td>
								<td></td>
								<td style="border-bottom:1px solid black;"><?php echo $Noted_by; ?></td>
								<td></td>
								<td style="border-bottom:1px solid black;"><?php echo $Approved_by; ?></td>
								<td></td>
								<td style="border-bottom:1px solid black;"><?php echo $Approved_by2; ?></td>
								<td></td>
							</tr>
							<tr>
								<td><?php echo $Prepared_by_desig; ?></td>
								<td></td>
								<td><?php echo $Noted_by_desig; ?></td>
								<td></td>
								<td><?php echo $Approved_by_desig; ?></td>
								<td></td>
								<td><?php echo $Approved_by2_desig; ?></td>
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
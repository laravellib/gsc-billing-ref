<?php 
    // header('Content-type: application/excel');
    // $filename = 'eNGASBugemco-'. date('mdY') .'.xls';
	// header('Content-Disposition: attachment; filename='.$filename);
	if($records != 'fail'){
		foreach($records as $record){

			// $balance = ($record->poAmount) - ($record->amountInFigure);
			break;
		}
	}

	if($records_soa != 'fail'){
		foreach($records_soa as $soa){

			$balance = ($soa->poAmount) - ($soa->amountInFigure);
			break;
		}
	}
	//$total = 0;
?>
	<html xmlns:x="urn:schemas-microsoft-com:office:excel">
		<head>
		</head>
		<style>
			body {
				font-family: 'Tahoma';
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
	
			@page { sheet-size: Letter; }
			
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
			<table width="100%">
				<tr>
					<td style="width:20%;text-align:center;"><img src="http://192.168.1.250/epis/static/img/gsclogo.png" alt="GSC Logo" style="width:12%;margin-top:-11%;"></td>
					<td style="width:80%;text-align:center;padding-left:-20%;">
						<h2 style="text-align:center;font-size:20px;">GENERAL SERVICES MULTIPURPOSE COOPERATIVE</h2>
						<h3 style="text-align:center;font-weight:normal;">BORJA ROAD, DAMILAG, MANOLO FORTICH, BUKIDNON</h3>
                        <h3 style="text-align:center;font-weight:normal;">CDA # 9520-10019987-1 / TIN 411-478-949-000</h3><br>
						<hr style="position:relative;top:20px;border:1px solid black;height:8px;margin-bottom:25px;">
						<h2 style="text-align:center;margin-top:-12%;">STATEMENT OF ACCOUNT</h2>
					</td>
				</tr>
			</table><br><br><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:bold;width:60%;"><?php echo($record->clientName); ?><p style="font-weight:normal;"><?php echo($record->clientDesignation); ?></p><p style="font-weight:normal;"><?php echo($record->clientOffice); ?></p></td>
                    <td style="font-weight:bold;width:30%;">Date: <?php echo($record->soaDate) ?></td>
				</tr>
			</table><br><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:60%;">Thru: <b><?php echo($record->thru) ?></b></td>
                    <td style="font-weight:bold;width:30%;"></td>
				</tr>
			</table><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:60%;">Dear Sir/Ma'am,</td>
                    <td style="font-weight:bold;width:30%;"></td>
				</tr>
			</table><br><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:84%;line-height: 2;text-align:justify;font-size:13px;">This is to bill <?php echo($record->companyName) ?>,
                    for the <b><?php echo($record->poDescription) ?></b> under 
                    <b>P.O No. <?php echo($record->poNumber) ?></b> in the amount of <b><?php echo ($record->amountInWords)?> (Php <?php echo number_format($record->amountInFigure, 2, '.', ',')?>) only</b> <?php echo ($record->percentAdvance)?>% <?php echo ($record->payment)?> payment was already deducted on this amount.
                    Please see below details:</td>
                    <td style="font-weight:bold;width:6%;"></td>
				</tr>
			</table><br><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:40%;">Total P.O Amount:</td>
                    <td style="font-weight:bold;width:20%;text-align:right;"><?php echo number_format($record->poAmount, 2, '.', ',') ?></td>
                    <td style="font-weight:bold;width:30%;"></td>
				</tr>
			</table>
            <table width="100%">
			<?php foreach ($records_soa as $soa):?>
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:40%;">Less <?php echo ($soa->percentAdvance)?>% <?php echo ($soa->payment)?> payment (<?php echo ($soa->soaDate)?>):</td>
                    <td style="font-weight:bold;width:20%;text-align:right;"><?php echo number_format($soa->amountInFigure, 2, '.', ',')?></td>
                    <td style="font-weight:bold;width:30%;"></td>
				</tr>
			<?php endforeach; ?>
			</table>
            <table width="100%">
			<?php
				if($records_soa != 'fail'){
					$balance = $soa->poAmount;
					foreach($records_soa as $soa){
						$balance = $balance - ($soa->amountInFigure);
					}
				}
			?>
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:40%;">PO total balance</td>
                    <td style="font-weight:bold;width:20%;border-top:1px solid black;text-align:right;">Php <?php echo number_format($balance, 2, '.', ',')?></td>
                    <td style="font-weight:bold;width:30%;"></td>
				</tr>
			</table><br><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:65%;">Please issue check in the name of <b><?php echo ($record->vendorCompanyName)?></b></td>
                    <td style="font-weight:bold;width:25%;"></td>
				</tr>
			</table><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:65%;">Thank you.</td>
                    <td style="font-weight:bold;width:25%;"></td>
				</tr>
			</table><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br>
            <table width="100%">
				<tr>
                    <td style="text-align:right;width:10%;"></td>
					<td style="font-weight:normal;width:65%;"><u><b><?php echo $record->vendorName?></b></u>
                    <p><?php echo $record->vendorDesig?></p></td>
                    <td style="font-weight:bold;width:25%;"></td>
				</tr>
			</table><br><br><br><br><br><br><br><br>
            <!-- <hr style="position:relative;top:5px;border:1px solid black;height:8px;margin-bottom:5px;">
            <p style="text-align:center;"><b>Contact #s:</b> 0917-7011814 / 0917-7022814 / 0917-7033814 / 0917-3199753 / 0917-3199714 / 0917-77796580</p>
            <p style="text-align:center;"><b>Website #s: www.gsc.com.ph / Email add: gensercoop@yahoo.com<b></p>
            <p style="text-align:center;font-family:Tahoma ,cursive;font-size:20px;"><i>"Resourceful Workmanship"</i></p> -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				<!-- <div style="text-align: center;font-weight:bold;font-size:90%;"> -->
					<!-- Page {PAGENO} of {nbpg} -->
                    <hr style="position:relative;top:5px;border:1px solid black;height:8px;margin-bottom:5px;">
            <p style="text-align:center;margin-bottom:5px;"><b>Contact #s:</b> 0917-7011814 / 0917-7022814 / 0917-7033814 / 0917-3199753 / 0917-3199714 / 0917-77796580</p>
            <p style="text-align:center;"><b>Website #s: www.gsc.com.ph / Email add: gensercoop@yahoo.com<b></p>
            <p style="text-align:center;font-family:Tahoma ,cursive;font-size:20px;"><i>"Resourceful Workmanship"</i></p>
				<!-- </div> -->
			</htmlpagefooter>
		</body>
	</html>
<?php 
    header('Content-type: application/excel');
    $filename = 'shabu-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);

	$total = 0;
?>
<html xmlns:x="urn:schemas-microsoft-com:office:excel">

    <head>
    </head>

    <style>
        body {
            font-family: 'Arial Black';
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
            font-size: 90%;
            padding: 5px;
            text-align:center;
            font-style: italic;
        }

    </style>
 
    <body>

        <?php if($records != 'fail'): ?>
            
            <table width="100%">
				<tr>
					<!-- <td style="width:20%;"><img src="http://192.168.1.250/epis/static/img/gsclogo.png" alt="GSC Logo" style="width:8%;"></td> -->
					<td style="width:120%;">
                        <?php foreach($company as $comp): ?>
                            <p><?php echo $comp->CompanyName; ?></p>
                            <p><?php echo $comp->CompanyAddress; ?></p>
                            <p><?php echo $comp->CompanyTINNo; ?></p>
                            <p>Date From: <?php echo $from; ?> To <?php echo $to; ?></p>
                            <br>
                        <?php endforeach ?>
					</td>
				</tr>
			</table>
            <table width="100%" class="main_t">
				<thead>
					<tr>
						<th style="width:10%;padding:20px 0;">ITEM #</th>
						<th style="width:10%;padding:20px 0;">DOCUMENT DATE</th>
						<th style="width:10%;padding:20px 0;">SOA NO.</th>
						<th style="width:10%;padding:20px 0;">DATE TRANSMITTED TO OPERATION</th>
                        <th style="width:10%;padding:20px 0;">DATE SIGNED BY SUPERVISOR</th>
						<th style="width:10%;padding:20px 0;">DATE SIGNED BY MANAGER</th>
                        <th style="width:10%;padding:20px 0;">DATE RECEIVED  DATA CONTROLLER</th>
                        <th style="width:10%;padding:20px 0;">DATE RECEIVED BILLING CLERK</th>
						<th style="width:15%;padding:20px 0;">DATE RECEIVED BY DMPI ACCOUNTING</th>
                        <th style="width:15%;padding:20px 0;">TRANSMITTAL NO.</th>
                        <th style="width:15%;padding:20px 0;">ACTIVITY</th>
                        <th style="width:15%;padding:20px 0;">FIELD</th>
                        <th style="width:15%;padding:20px 0;">HAS/TONS</th>
                        <th style="width:15%;padding:20px 0;">GL</th>
                        <th style="width:15%;padding:20px 0;">CC</th>
                        <th style="width:15%;padding:20px 0;">ST</th>
                        <th style="width:15%;padding:20px 0;">OT</th>
                        <th style="width:15%;padding:20px 0;">ND</th>
                        <th style="width:15%;padding:20px 0;">NDOT</th>
                        <th style="width:15%;padding:20px 0;">SHOL</th>
                        <th style="width:15%;padding:20px 0;">SHOL-OT</th>
                        <th style="width:15%;padding:20px 0;">SHOL-ND</th>
                        <th style="width:15%;padding:20px 0;">SHOL-NDOT</th>
                        <th style="width:15%;padding:20px 0;">SHRD</th>
                        <th style="width:15%;padding:20px 0;">SHRD-OT</th>
                        <th style="width:15%;padding:20px 0;">SHRD-ND</th>
                        <th style="width:15%;padding:20px 0;">SHRD-NDOT</th>
                        <th style="width:15%;padding:20px 0;">RHOL</th>
                        <th style="width:15%;padding:20px 0;">RHOL-OT</th>
                        <th style="width:15%;padding:20px 0;">RHOL-ND</th>
                        <th style="width:15%;padding:20px 0;">RHOL-NDOT</th>
                        <th style="width:15%;padding:20px 0;">RHSH</th>
                        <th style="width:15%;padding:20px 0;">RHSH-OT</th>
                        <th style="width:15%;padding:20px 0;">RHSH-ND</th>
                        <th style="width:15%;padding:20px 0;">RHSH-NDOT</th>
                        <th style="width:15%;padding:20px 0;">ST</th>
                        <th style="width:15%;padding:20px 0;">OT</th>
                        <th style="width:15%;padding:20px 0;">ND</th>
                        <th style="width:15%;padding:20px 0;">NDOT</th>
                        <th style="width:15%;padding:20px 0;">SHOL</th>
                        <th style="width:15%;padding:20px 0;">SHOL-OT</th>
                        <th style="width:15%;padding:20px 0;">SHOL-ND</th>
                        <th style="width:15%;padding:20px 0;">SHOL-NDOT</th>
                        <th style="width:15%;padding:20px 0;">SHRD</th>
                        <th style="width:15%;padding:20px 0;">SHRD-OT</th>
                        <th style="width:15%;padding:20px 0;">SHRD-ND</th>
                        <th style="width:15%;padding:20px 0;">SHRD-NDOT</th>
                        <th style="width:15%;padding:20px 0;">RHOL</th>
                        <th style="width:15%;padding:20px 0;">RHOL-OT</th>
                        <th style="width:15%;padding:20px 0;">RHOL-ND</th>
                        <th style="width:15%;padding:20px 0;">RHOL-NDOT</th>
                        <th style="width:15%;padding:20px 0;">RHSH</th>
                        <th style="width:15%;padding:20px 0;">RHSH-OT</th>
                        <th style="width:15%;padding:20px 0;">RHSH-ND</th>
                        <th style="width:15%;padding:20px 0;">RHSH-NDOT</th>
                        <th style="width:15%;padding:20px 0;">ST</th>
                        <th style="width:15%;padding:20px 0;">OT</th>
                        <th style="width:15%;padding:20px 0;">ND</th>
                        <th style="width:15%;padding:20px 0;">NDOT</th>
                        <th style="width:15%;padding:20px 0;">TOTAL</th>
                        <th style="width:15%;padding:20px 0;">HC</th>
                        <th style="width:15%;padding:20px 0;">REMARKS</th>
                        <th style="width:15%;padding:20px 0;">DEPARTMENT</th>
                        <th style="width:15%;padding:20px 0;">GSCMPC SOA NO.</th>
                        <th style="width:15%;padding:20px 0;">ST</th>
                        <th style="width:15%;padding:20px 0;">OT</th>
                        <th style="width:15%;padding:20px 0;">ND</th>
                        <th style="width:15%;padding:20px 0;">NDOT</th>
                        <th style="width:15%;padding:20px 0;">HC</th>
                        <th style="width:15%;padding:20px 0;">TOTAL</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach($records as $record): ?>
					<tr>
						<td style="text-align:center;"><?php echo $record->item;  ?></td>
						<td style="text-align:center;"><?php echo $record->soaDate;  ?></td>
						<td style="text-align:center;"><?php echo $record->soaNumber;  ?></td>
						<td style="text-align:center;"><?php echo $record->dateTransmittedToOperation;  ?></td>
						<td style="text-align:center;"><?php echo $record->dateSignedBySupervisor;  ?></td>
						<td style="text-align:center;"><?php echo $record->dateSignedByManager;  ?></td>
						<td style="text-align:center;"><?php echo $record->dateReceivedByDataController;  ?></td>
						<td style="text-align:center;"><?php echo $record->dateReceivedByBillingClerk;  ?></td>
						<td style="text-align:center;"><?php echo $record->DateReceivedByDmpiAccount;  ?></td>
						<td style="text-align:center;"><?php echo $record->TransmittalNumber;  ?></td>
						<td style="text-align:center;"><?php echo $record->activity;  ?></td>
						<td style="text-align:center;"><?php echo $record->field;  ?></td>
						<td style="text-align:center;"><?php echo $record->accomplished;  ?></td>
						<td style="text-align:center;"><?php echo $record->gl;  ?></td>
						<td style="text-align:center;"><?php echo $record->cc;  ?></td>

                        <!-- hours rendered  -->
						<td style="text-align:center;"><?php echo $record->rdst;  ?></td>
						<td style="text-align:center;"><?php echo $record->rdot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rdnd;  ?></td>
						<td style="text-align:center;"><?php echo $record->rdndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->sholst;  ?></td>
						<td style="text-align:center;"><?php echo $record->sholot;  ?></td>
						<td style="text-align:center;"><?php echo $record->sholnd;  ?></td>
						<td style="text-align:center;"><?php echo $record->sholndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrdst;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrdot;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrdnd;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrdndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rholst;  ?></td>
						<td style="text-align:center;"><?php echo $record->rholot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rholnd;  ?></td>
						<td style="text-align:center;"><?php echo $record->rholndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrdst;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrdot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrdnd;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrdndot;  ?></td>

                        <!-- rates  -->
						<td style="text-align:center;"><?php echo $record->rd_st;  ?></td>
						<td style="text-align:center;"><?php echo $record->rd_ot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rd_nd;  ?></td>
						<td style="text-align:center;"><?php echo $record->rd_ndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->shol_st;  ?></td>
						<td style="text-align:center;"><?php echo $record->shol_ot;  ?></td>
						<td style="text-align:center;"><?php echo $record->shol_nd;  ?></td>
						<td style="text-align:center;"><?php echo $record->shol_ndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrd_st;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrd_ot;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrd_nd;  ?></td>
						<td style="text-align:center;"><?php echo $record->shrd_ndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhol_st;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhol_ot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhol_nd;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhol_ndot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrd_st;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrd_ot;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrd_nd;  ?></td>
						<td style="text-align:center;"><?php echo $record->rhrd_ndot;  ?></td>

                        <!-- totals  -->
                        <td style="text-align:center;"><?php echo $record->totalst;  ?></td>
                        <td style="text-align:center;"><?php echo $record->totalot;  ?></td>
                        <td style="text-align:center;"><?php echo $record->totalnd;  ?></td>
                        <td style="text-align:center;"><?php echo $record->totalndot;  ?></td>
                        <td style="text-align:center;"><?php echo $record->totalAmt;  ?></td>


                        <td style="text-align:center;"><?php echo $record->headCount;  ?></td>
                        <td style="text-align:center;"><?php echo $record->remarks;  ?></td>
                        <td style="text-align:center;"><?php echo $record->Location;  ?></td>
                        <td style="text-align:center;"><?php echo $record->GSMPC_SOA;  ?></td>

                        <td style="text-align:center;"><?php echo $record->gt_st;  ?></td>
                        <td style="text-align:center;"><?php echo $record->gt_ot;  ?></td>
                        <td style="text-align:center;"><?php echo $record->gt_nd;  ?></td>
                        <td style="text-align:center;"><?php echo $record->gt_ndot;  ?></td>

                        <td style="text-align:center;"><?php echo $record->gt_hc;  ?></td>
                        <td style="text-align:center;"><?php echo $record->grand_total;  ?></td>

					</tr>
					<?php endforeach; ?>

				</tbody>
			</table>

        <?php else: ?>

            NO DATA FOUND...

        <?php endif; ?>

        <htmlpagefooter name="myFooter" class="footer" style="display:none">
            <div style="text-align: center;font-weight:bold;font-size:90%;">
                <!-- Page {PAGENO} of {nbpg} -->
            </div>
        </htmlpagefooter>

    </body>

</html>
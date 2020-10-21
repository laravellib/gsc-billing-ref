<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Payroll;

class PayrollController extends Controller
{
    public function getCompanyInfo()
    {
        $payroll = new Payroll();
        $companyInfo = $payroll->getCompanyInfo();
        return $companyInfo;
    }
}

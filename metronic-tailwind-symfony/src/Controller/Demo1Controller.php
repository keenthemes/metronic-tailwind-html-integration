<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class Demo1Controller extends AbstractController
{
    #[Route('/demo1', name: 'demo1_index')]
    public function index(): Response
    {
        // Hardcoded dashboard data
        $dashboardData = [
            'stats' => [
                'total_users' => '12,487',
                'active_sessions' => '3,247',
                'revenue' => '$89,245',
                'conversion_rate' => '4.8%'
            ],
            'recent_users' => [
                ['name' => 'John Doe', 'email' => 'john@example.com', 'status' => 'Active'],
                ['name' => 'Jane Smith', 'email' => 'jane@example.com', 'status' => 'Inactive'],
                ['name' => 'Bob Wilson', 'email' => 'bob@example.com', 'status' => 'Active'],
                ['name' => 'Alice Brown', 'email' => 'alice@example.com', 'status' => 'Pending']
            ],
            'chart_data' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                'data' => [12, 19, 3, 5, 2, 3]
            ],
            'notifications' => [
                'You have 5 new messages',
                '2 users registered today',
                'Server maintenance scheduled for tomorrow'
            ]
        ];

        return $this->render('demo1/index.html.twig', [
            'controller_name' => 'Demo1Controller',
            'data' => $dashboardData,
        ]);
    }
}
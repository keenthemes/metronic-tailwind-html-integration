<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class Demo2Controller extends AbstractController
{
    #[Route('/demo2', name: 'demo2_index')]
    public function index(): Response
    {
        // Hardcoded dashboard data for header layout
        $dashboardData = [
            'stats' => [
                'projects' => '45',
                'tasks_completed' => '1,247',
                'team_members' => '24',
                'success_rate' => '94.2%'
            ],
            'recent_projects' => [
                ['name' => 'E-commerce Platform', 'progress' => 85, 'status' => 'In Progress'],
                ['name' => 'Mobile App Redesign', 'progress' => 100, 'status' => 'Completed'],
                ['name' => 'Dashboard Analytics', 'progress' => 60, 'status' => 'In Progress'],
                ['name' => 'API Integration', 'progress' => 30, 'status' => 'Started']
            ],
            'team_activity' => [
                'labels' => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                'data' => [65, 78, 90, 81, 56, 55, 40]
            ],
            'quick_actions' => [
                'Create New Project',
                'Add Team Member',
                'Generate Report',
                'Schedule Meeting'
            ]
        ];

        return $this->render('demo2/index.html.twig', [
            'controller_name' => 'Demo2Controller',
            'data' => $dashboardData,
        ]);
    }
}
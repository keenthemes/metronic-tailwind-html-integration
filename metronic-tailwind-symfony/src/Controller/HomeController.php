<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('home.html.twig', [
            'demos' => [
                ['name' => 'Demo 1 - Sidebar Layout', 'url' => '/demo1', 'description' => 'Classic sidebar navigation with dashboard'],
                ['name' => 'Demo 2 - Header Layout', 'url' => '/demo2', 'description' => 'Modern header navigation with project management']
            ]
        ]);
    }
}
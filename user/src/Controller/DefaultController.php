<?php

namespace App\Controller;

use App\Entity\FutureUser;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route("/")]
class DefaultController extends AbstractController
{
    #[Route('/')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/hello')]
    public function indexApi(): Response
    {
        return $this->json("Hello API service User");
    }

    #[Route('/inscription', methods: "POST")]
    public function register(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $email = $data['email'];
        $firstname = $data['firstname'];
        $lastname = $data['lastname'];
        $phone = $data['phone'];
        $nationality = $data['nationality'];
        // $validate = 0;

        $future_user = new FutureUser();
        $future_user->setEmail($email);
        $future_user->setFirstname($firstname);
        $future_user->setLastname($lastname);
        $future_user->setPhoneNumber($phone);
        $future_user->setNationality($nationality);
        $future_user->setValidRegister(0);

        // $password = $this->hasher->hashPassword($future_user, $password);
        // $future_user->setPassword($password);
        // $future_user->setRoles(["ROLE_USER"]);

        return $this->json("Inscription service reached, voici le future_user : ".$future_user);
    }
    
}

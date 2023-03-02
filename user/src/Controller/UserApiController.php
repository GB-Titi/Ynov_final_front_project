<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\FutureUser;
use App\Repository\FutureUserRepository;

#[Route('/api/.user', name: 'app_user_api')]
class UserApiController extends AbstractController
{

    #[Route('/', methods: "GET")]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json(
            [
                'user' => $user->getUserIdentifier(),
                'roles' => $user->getRoles()
            ]
        );
    }

    #[Route('/check_role', name: 'app_user_api_check_role', methods: "POST")]
    public function checkRole(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $role = $data["role"];
        if (!$role) {
            return $this->json([
                'message' => 'role missing',
            ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(in_array($role, $user->getRoles()));
    }

    #[Route('/login', name: 'app_user_api_login', methods: "POST")]
    public function userLogin(Request $request)
    {
        // $user = $this->getUser();

        $user = $this->getUser();
        return $this->json(
            [
                'user' => $user->getUserIdentifier(),
                'roles' => $user->getRoles()
            ]
        );
    }

    #[Route('/inscription', methods: "POST")]
    public function register(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

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
        $future_user->setEntreprise(0);

        // $password = $this->hasher->hashPassword($future_user, $password);
        // $future_user->setPassword($password);
        // $future_user->setRoles(["ROLE_USER"]);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($future_user);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new future-user with id ' . $future_user->getId());
    }

    // #[Route('/inscription/valide-user/{id}', methods: "POST")]
    // public function register_future_user(FutureUserRepository $futureUserRepository,$id)
    // {
    //     echo("<script>console.log('Récupération des futures users')</script>");
    //     $future_user = $futureUserRepository->findById($id);
    //     $future_user->setValidRegister(1);
    //     echo($future_user);
    //     return  $this->json($future_user);
    // }
}


#[Route('/api/future-user', name: 'app_future_users')]
class FutureUserApiController extends AbstractController
{
    #[Route('/', methods: "GET")]
    public function get_future_users(FutureUserRepository $futureUserRepository)
    {
        echo ("<script>console.log('Récupération des futures users')</script>");
        $future_users = $futureUserRepository->findAll();
        echo ($future_users);
        return  $this->json($future_users);
    }
}

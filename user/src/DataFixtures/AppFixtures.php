<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $hashish;
    public function __construct(UserPasswordHasherInterface $passwordHasherFactory)
    {
        $this->hashish = $passwordHasherFactory;
    }

    public function load(ObjectManager $manager): void
    {
        // $passwordHasher = new UserPasswordHasher($passwordHasherFactory);
        // $product = new Product();
        // $manager->persist($product);
        $user = new User();
        $user->setEmail('test@test.fr');

        // Get the user password (e.g. from a registration form)
        $plaintextPassword = "test";
        
        // hash the password (based on the password hasher factory config for the $user class)
        $hashedPassword = $this->hashish->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setPassword($hashedPassword);
        $user->setRoles(['ROLE_ADMIN']);
        $manager->persist($user);

        $manager->flush();
    }
}

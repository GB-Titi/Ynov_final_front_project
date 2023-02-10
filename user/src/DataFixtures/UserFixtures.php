<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use App\Entity\FutureUser;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        //Fixtures pour le user
        $user = new User();
        $user->setEmail('user@gamos.com');

        $password = $this->hasher->hashPassword($user, 'user');
        $user->setPassword($password);
        $user->setRoles(["ROLE_USER"]);

        $manager->persist($user);

        //Fixture pour l'admin
        $admin = new User();
        $admin->setEmail("admin@gamos.com");
        $passwordAdmin = $this->hasher->hashPassword($user, 'admin');
        $admin->setPassword($passwordAdmin);
        $admin->setRoles(["ROLE_ADMIN"]);

        $manager->persist($admin);

        //Fixture pour le future_user
        $future_user = new FutureUser();

        $future_user->setEmail('future@user.fr');
        $future_user->setFirstname('Future');
        $future_user->setLastname('User');
        $future_user->setPhoneNumber('06660999069');
        $future_user->setNationality('Français');
        $future_user->setValidRegister(0);
        $future_user->setEntreprise(0);

        $manager->persist($future_user);

        $manager->flush();
    }
}

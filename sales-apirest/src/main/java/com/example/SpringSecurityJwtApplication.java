package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
public class SpringSecurityJwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityJwtApplication.class, args);
	}
	/*@Autowired
	PasswordEncoder passwordEncoder;


	@Autowired
	UserRepository userRepository;

	@Bean
	CommandLineRunner init(UserRepository userRepository){
			return args -> {


				PermissionEntity createPermission = new PermissionEntity.PermissionBuilder()
						.name("CREATE")
						.build();
				PermissionEntity readPermission = new PermissionEntity.PermissionBuilder()
						.name("READ")
						.build();
				PermissionEntity updatePermission = new PermissionEntity.PermissionBuilder()
						.name("UPDATE")
						.build();
				PermissionEntity deletePermission = new PermissionEntity.PermissionBuilder()
						.name("DELETE")
						.build();
				PermissionEntity refactorPermission = new PermissionEntity.PermissionBuilder()
						.name("REFACTOR")
						.build();

				RoleEntity roleAdmin = new RoleEntity.Builder()
						.name(eRole.ADMIN.ADMIN)
						.permissions(Set.of(createPermission, readPermission, updatePermission, deletePermission))
						.build();
				RoleEntity roleUser = new RoleEntity.Builder()
						.name(eRole.USER)
						.permissions(Set.of(createPermission, readPermission))
						.build();
				RoleEntity roleIndvited = new RoleEntity.Builder()
						.name(eRole.INVITED)
						.permissions(Set.of(readPermission))
						.build();
				RoleEntity roleDeveloper = new RoleEntity.Builder()
						.name(eRole.DEVELOPER)
						.permissions(Set.of(createPermission, readPermission, updatePermission, deletePermission, refactorPermission))
						.build();

				UserEntity userRoberto =   new UserEntity.Builder()
						.email("robert1@gmail.com")
						.username("robert")
						.password(passwordEncoder.encode("1331"))
						.isEnabled(true)
						.accountNoExpired(true)
						.credentialNoLocked(true)
						.credentialNoExpired(true)
						.roles(Set.of(roleAdmin))
						.build();
				UserEntity userGabi = new UserEntity.Builder()
						.email("gabi1@gmail.com")
						.username("gabi")
						.password(passwordEncoder.encode("1331"))
						.isEnabled(true)
						.accountNoExpired(true)
						.credentialNoLocked(true)
						.credentialNoExpired(true)
						.roles(Set.of(roleUser))
						.build();
				UserEntity userAlberto =   new UserEntity.Builder()
						.email("alberto1@gmail.com")
						.username("alberto")
						.password(passwordEncoder.encode("1331"))
						.isEnabled(true)
						.accountNoExpired(true)
						.credentialNoLocked(true)
						.credentialNoExpired(true)
						.roles(Set.of(roleDeveloper))
						.build();
				UserEntity joseAlberto =   new UserEntity.Builder()
						.email("jose1@gmail.com")
						.username("jose")
						.password(passwordEncoder.encode("1331"))
						.isEnabled(true)
						.accountNoExpired(true)
						.credentialNoLocked(true)
						.credentialNoExpired(true)
						.roles(Set.of(roleDeveloper))
						.build();

				userRepository.saveAll(List.of(userRoberto, userGabi, userAlberto, joseAlberto));
			};

		}*/

}

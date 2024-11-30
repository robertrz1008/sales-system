package com.example.Controller;

import com.example.models.Client;
import com.example.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN', 'USER')")
    @GetMapping("/list")
    public List<Client> clientsList(){
        return clientService.allClients();
    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @GetMapping("/get/{id}")
    public Client finClientById(@PathVariable long id){
        return clientService.getClientByid(id);
    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN', 'USER')")
    @PostMapping("/create")
    public Client createclient(@RequestBody Client client){
        return clientService.createClient(client);
    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN','USER')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateClient(@PathVariable long id, @RequestBody Client client){
        ResponseEntity<?> response;
        try {
            response = clientService.updateClient(id, client);
            return response;
        }catch (Exception e){
            return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable long id){
        ResponseEntity<?> response;
        try {
            response = clientService.deleteClient(id);
            return response;
        }catch (Exception e){
            return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}

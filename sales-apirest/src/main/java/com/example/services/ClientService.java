package com.example.services;

import com.example.models.Client;
import com.example.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository repository;

    public List<Client> allClients(){
        List<Client> clients = repository.findAll();
        return clients;
    }

    public Client getClientByid(long id){
        Client client = repository.findById(id)
                .orElseThrow(() ->new RuntimeException("client not found"));
        return client;
    }

    public Client createClient(Client client){
        Client clien = repository.save(client);
        return client;
    }

    public ResponseEntity<?>  updateClient(long id,Client client){
        Client clientFound = repository.findById(id).orElseThrow(() ->new RuntimeException("client not found"));

        clientFound.setName(client.getName());
        clientFound.setDirection(client.getDirection());
        clientFound.setEmail(client.getEmail());
        clientFound.setTelephone(client.getTelephone());
        clientFound.setDni(client.getDni());

        repository.save(clientFound);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<?> deleteClient(long id){
        Client clientFound = repository.findById(id)
                .orElseThrow(() ->new RuntimeException("client not found"));

        repository.delete(clientFound);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}

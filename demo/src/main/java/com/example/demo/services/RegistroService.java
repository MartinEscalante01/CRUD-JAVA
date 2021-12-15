package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.RegistroModel;
import com.example.demo.repositories.RegistroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistroService {
    @Autowired
    RegistroRepository registroRepository;
    
    public ArrayList<RegistroModel> obtenerRegistros(){
        return (ArrayList<RegistroModel>) registroRepository.findAll();
    }

    public RegistroModel guardarRegistro(RegistroModel registro){
        return registroRepository.save(registro);
    }
//**************** 2da etapa
    public Optional<RegistroModel> obtenerPorId(Long id){
        return registroRepository.findById(id);
    }

    public boolean eliminarRegistro(Long id) {
        try{
            registroRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
    
}
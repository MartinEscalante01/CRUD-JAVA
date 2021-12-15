package com.example.demo.controllers;
import java.util.ArrayList;
import java.util.Optional;
import com.example.demo.models.RegistroModel;
import com.example.demo.services.RegistroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/registros")

public class RegistroController {
    @Autowired
    RegistroService registroService;
    @CrossOrigin   // para solucionar error cors
    @GetMapping()
    public ArrayList<RegistroModel> obtenerRegistros(){
        return registroService.obtenerRegistros();
    }
    @CrossOrigin 
    @PostMapping()
    public RegistroModel guardarRegistro(@RequestBody RegistroModel registro){
        return this.registroService.guardarRegistro(registro);
    }
    @CrossOrigin
    @GetMapping( path = "/{id}")
    public Optional<RegistroModel> obtenerRegistroPorId(@PathVariable("id") Long id) {
        return this.registroService.obtenerPorId(id);
    }
    @CrossOrigin
    @DeleteMapping( path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.registroService.eliminarRegistro(id);
        if (ok){
            return "Se eliminó el registro con id " + id;
        }else{
            return "No pudo eliminar el registro con id" + id;
        }
    }
}

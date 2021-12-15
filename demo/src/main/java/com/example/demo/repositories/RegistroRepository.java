package com.example.demo.repositories;
import java.util.ArrayList;
import com.example.demo.models.RegistroModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository

public interface RegistroRepository extends CrudRepository<RegistroModel, Long> {
    public abstract ArrayList<RegistroModel> findByPrioridad(Integer prioridad);

}

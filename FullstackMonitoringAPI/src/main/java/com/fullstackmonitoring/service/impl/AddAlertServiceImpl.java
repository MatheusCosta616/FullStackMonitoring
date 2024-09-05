package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.AddAlertService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class AddAlertServiceImpl implements AddAlertService {

    private static final Logger logger = LogManager.getLogger(AddAlertServiceImpl.class);

    @Autowired
    DeviceRepository deviceRepository;


    @Override
    public DeviceModel addAlert(@PathVariable(value = "deviceId") UUID deviceId, @RequestBody String alertMessage){
        Optional<DeviceModel> deviceOptional = deviceRepository.findById(deviceId);
        if (deviceOptional.isEmpty()) {
            logger.error("Dispositivo com ID {} não encontrado.", deviceId);
            throw new RuntimeException("Dispositivo não encontrado");
        }


        DeviceModel device = deviceOptional.get();
        device.setAlert(alertMessage);
        device.setLastPing(LocalDateTime.now().toString());

        return deviceRepository.save(device);
    }
}

package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.GetOneDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class GetOneDeviceSeriviceImpl implements GetOneDeviceService {
    @Autowired
    DeviceRepository deviceRepository;

    @Override
    public DeviceModel getOneDevice(UUID deviceId) {
        Optional<DeviceModel> deviceOptional = deviceRepository.findById(deviceId);
        if (deviceOptional.isPresent()) {
            return deviceOptional.get();
        } else {
            throw new RuntimeException("Dispositivo não encontrado");
        }
    }
}

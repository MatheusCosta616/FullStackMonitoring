package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.GetDeviceAlertService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class GetDeviceAlertServiceImpl implements GetDeviceAlertService {

    private static final Logger logger = LogManager.getLogger(GetDeviceAlertServiceImpl.class);

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public String getDeviceAlert(UUID deviceId) {
        Optional<DeviceModel> deviceOptional = deviceRepository.findById(deviceId);

        if (deviceOptional.isEmpty()) {
            logger.error("Dispositivo com ID {} não encontrado.", deviceId);
            throw new RuntimeException("Dispositivo não encontrado");
        }

        return deviceOptional.get().getAlert();
    }
}

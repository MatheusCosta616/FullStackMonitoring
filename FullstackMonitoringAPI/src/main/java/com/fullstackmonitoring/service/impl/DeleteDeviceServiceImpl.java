package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.DeleteDeviceService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class DeleteDeviceServiceImpl implements DeleteDeviceService {

    private static final Logger logger = LogManager.getLogger(DeleteDeviceServiceImpl.class);

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public DeviceModel deleteDevice(UUID deviceId) {
        Optional<DeviceModel> deviceOptional = deviceRepository.findById(deviceId);

        if (deviceOptional.isEmpty()) {
            logger.error("Dispositivo com ID {} não encontrado.", deviceId);
            throw new RuntimeException("Dispositivo não encontrado");
        }

        DeviceModel device = deviceOptional.get();
        deviceRepository.delete(device);

        logger.info("Dispositivo com ID {} deletado com sucesso.", deviceId);
        return device;
    }
}

package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.AddDeviceLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class AddDeviceLogServiceImpl implements AddDeviceLogService {

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public DeviceModel addDeviceLog(UUID deviceId, String logMessage) {
        return getDeviceModel(deviceId, logMessage, deviceRepository);
    }

    static DeviceModel getDeviceModel(UUID deviceId, String logMessage, DeviceRepository deviceRepository) {
        DeviceModel device = deviceRepository.findById(deviceId)
                .orElseThrow(() -> new RuntimeException("Dispositivo não encontrado"));

        String currentLogs = device.getLogs();
        String updatedLogs = currentLogs == null || currentLogs.isEmpty()
                ? logMessage
                : currentLogs + "\n" + logMessage;

        device.setLogs(updatedLogs);
        device.setLastPing(LocalDateTime.now().toString());

        return deviceRepository.save(device);
    }
}
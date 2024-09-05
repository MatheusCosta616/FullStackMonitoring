package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.GetDeviceLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class GetDeviceLogServiceImpl implements GetDeviceLogService {

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public String getDeviceLog(UUID deviceId) {
        DeviceModel device = deviceRepository.findById(deviceId)
                .orElseThrow(() -> new RuntimeException("Dispositivo não encontrado"));
        return device.getLogs();
    }
}
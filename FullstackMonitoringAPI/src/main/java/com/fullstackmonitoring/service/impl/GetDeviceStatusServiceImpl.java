package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.exception.ResourceNotFoundException;
import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.GetDeviceStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.UUID;

@Service
public class GetDeviceStatusServiceImpl implements GetDeviceStatusService {
    @Autowired
    DeviceRepository deviceRepository;

    @Override
    public String getDeviceStatus(@PathVariable(value = "deviceId") UUID deviceId) {
        DeviceModel deviceModel = deviceRepository.findById(deviceId).orElseThrow(() -> new ResourceNotFoundException("Device not found"));
        return deviceModel.getStatus();
    }
}

package com.fullstackmonitoring.service;

import com.fullstackmonitoring.model.DeviceModel;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface GetOneDeviceService {
    public DeviceModel getOneDevice(UUID deviceId);
}

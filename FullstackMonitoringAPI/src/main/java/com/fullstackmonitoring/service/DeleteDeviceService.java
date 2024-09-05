package com.fullstackmonitoring.service;

import com.fullstackmonitoring.model.DeviceModel;

import java.util.UUID;

public interface DeleteDeviceService {
    public DeviceModel deleteDevice(UUID deviceId);
}

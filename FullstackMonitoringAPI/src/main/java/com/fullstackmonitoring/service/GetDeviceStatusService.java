package com.fullstackmonitoring.service;

import com.fullstackmonitoring.model.DeviceModel;

import java.util.UUID;

public interface GetDeviceStatusService {
    public String getDeviceStatus(UUID deviceId);
}

package com.fullstackmonitoring.service;

import com.fullstackmonitoring.model.DeviceModel;

import java.util.UUID;

public interface AddAlertService {
    public DeviceModel addAlert(UUID deviceId, String alertMessage);
}

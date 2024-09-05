package com.fullstackmonitoring.service;

import com.fullstackmonitoring.model.DeviceModel;
import java.util.UUID;

public interface AddDeviceLogService {
    DeviceModel addDeviceLog(UUID deviceId, String logMessage);
}
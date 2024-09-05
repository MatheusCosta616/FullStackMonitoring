package com.fullstackmonitoring.service;

import java.util.UUID;

public interface GetDeviceLogService {
    String getDeviceLog(UUID deviceId);
}
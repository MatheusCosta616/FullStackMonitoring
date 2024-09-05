package com.fullstackmonitoring.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface GetDeviceAlertService {
    public String getDeviceAlert(UUID deviceId);
}

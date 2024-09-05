package com.fullstackmonitoring.service;

import com.fullstackmonitoring.dto.DeviceDTO;
import com.fullstackmonitoring.model.DeviceModel;

import java.util.UUID;

public interface UpdateDeviceService {
    public DeviceModel updateDevice(UUID deviceId, DeviceDTO deviceDTO);
}

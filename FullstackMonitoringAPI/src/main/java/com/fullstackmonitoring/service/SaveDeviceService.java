package com.fullstackmonitoring.service;

import com.fullstackmonitoring.dto.DeviceDTO;
import com.fullstackmonitoring.model.DeviceModel;
import org.springframework.stereotype.Service;


@Service
public interface SaveDeviceService {
    public DeviceModel saveDevice(DeviceDTO deviceDTO);
}

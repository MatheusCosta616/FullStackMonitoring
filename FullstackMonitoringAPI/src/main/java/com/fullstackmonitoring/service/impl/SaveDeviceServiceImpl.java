package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.dto.DeviceDTO;
import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.SaveDeviceService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveDeviceServiceImpl implements SaveDeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public DeviceModel saveDevice(DeviceDTO deviceDTO) {
        DeviceModel deviceModel = new DeviceModel();
        BeanUtils.copyProperties(deviceDTO, deviceModel);

        return deviceRepository.save(deviceModel);
    }
}

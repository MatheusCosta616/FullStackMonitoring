package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.GetAllDevicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class GetAllDevicesServiceImpl implements GetAllDevicesService {
    @Autowired
    DeviceRepository deviceRepository;

    @Override
    public List<DeviceModel> getAllDevices(){
        return deviceRepository.findAll();
    }
}

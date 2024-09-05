package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.dto.DeviceDTO;
import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.UpdateDeviceService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UpdateDeviceServiceImpl implements UpdateDeviceService {

    private static final Logger logger = LogManager.getLogger(UpdateDeviceServiceImpl.class);

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public DeviceModel updateDevice(UUID deviceId, DeviceDTO deviceDTO) {
        Optional<DeviceModel> deviceOptional = deviceRepository.findById(deviceId);

        if (deviceOptional.isEmpty()) {
            logger.error("Dispositivo com ID {} não encontrado.", deviceId);
            throw new RuntimeException("Dispositivo não encontrado");
        }

        DeviceModel device = deviceOptional.get();
        BeanUtils.copyProperties(deviceDTO, device);

        DeviceModel updatedDevice = deviceRepository.save(device);
        logger.info("Dispositivo com ID {} atualizado com sucesso.", deviceId);

        return updatedDevice;
    }
}

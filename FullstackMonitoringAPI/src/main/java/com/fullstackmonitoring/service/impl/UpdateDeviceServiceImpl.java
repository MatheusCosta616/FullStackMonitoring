package com.fullstackmonitoring.service.impl;

import com.fullstackmonitoring.dto.DeviceDTO;
import com.fullstackmonitoring.exception.ResourceNotFoundException;
import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.repositories.DeviceRepository;
import com.fullstackmonitoring.service.UpdateDeviceService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
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
            throw new ResourceNotFoundException("Dispositivo não encontrado");
        }

        DeviceModel device = deviceOptional.get();
        updateDeviceFields(device, deviceDTO);

        DeviceModel updatedDevice = deviceRepository.save(device);
        logger.info("Dispositivo com ID {} atualizado com sucesso.", deviceId);

        return updatedDevice;
    }

    private void updateDeviceFields(DeviceModel device, DeviceDTO deviceDTO) {
        if (deviceDTO.name() != null) {
            device.setName(deviceDTO.name());
        }
        if (deviceDTO.status() != null) {
            device.setStatus(deviceDTO.status());
        }
        if (deviceDTO.lastPing() != null) {
            device.setLastPing(deviceDTO.lastPing());
        }
        if (deviceDTO.location() != null) {
            device.setLocation(deviceDTO.location());
        }
        if (deviceDTO.logs() != null) {
            device.setLogs(deviceDTO.logs());
        }
        if (deviceDTO.alert() != null) {
            device.setAlert(deviceDTO.alert());
        }
    }
}

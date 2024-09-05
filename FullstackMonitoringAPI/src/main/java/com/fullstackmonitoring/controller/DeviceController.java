package com.fullstackmonitoring.controller;

import com.fullstackmonitoring.dto.DeviceDTO;
import com.fullstackmonitoring.model.DeviceModel;
import com.fullstackmonitoring.service.*;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class DeviceController {

    Logger logger = LoggerFactory.getLogger(DeviceController.class);

    @Autowired
    private SaveDeviceService saveDeviceService;

    @Autowired
    private GetAllDevicesService getAllDevicesService;

    @Autowired
    private GetOneDeviceService getOneDeviceService;

    @Autowired
    private UpdateDeviceService updateDeviceService;

    @Autowired
    private DeleteDeviceService deleteDeviceService;

    @Autowired
    private GetDeviceStatusService getDeviceStatusService;

    @Autowired
    private AddDeviceLogService addDeviceLogService;

    @Autowired
    private GetDeviceLogService getDeviceLogService;

    @Autowired
    private AddAlertService addAlertService;

    @Autowired
    private GetDeviceAlertService getDeviceAlertService;

    @PostMapping("/devices")
    public ResponseEntity<DeviceModel> saveDevice(@RequestBody @Valid DeviceDTO deviceDTO) {
        logger.info("Saving device " + deviceDTO);
        return new ResponseEntity<>(saveDeviceService.saveDevice(deviceDTO), HttpStatus.CREATED);
    }

    @GetMapping("/devices")
    public ResponseEntity<List<DeviceModel>> getAllDevices() {
        return new ResponseEntity<>(getAllDevicesService.getAllDevices(), HttpStatus.OK);
    }

    @GetMapping("/devices/{deviceId}")
    public ResponseEntity<DeviceModel> getOneDevice(@PathVariable(value = "deviceId") UUID deviceId) {
        return new ResponseEntity<>(getOneDeviceService.getOneDevice(deviceId), HttpStatus.OK);
    }

    @PutMapping("/devices/{deviceId}")
    public ResponseEntity<DeviceModel> updateDevice(@PathVariable(value = "deviceId") UUID deviceId,
                                                    @RequestBody @Valid DeviceDTO deviceDTO) {
        return new ResponseEntity<>(updateDeviceService.updateDevice(deviceId, deviceDTO), HttpStatus.OK);
    }

    @DeleteMapping("/devices/{deviceId}")
    public ResponseEntity<DeviceModel> deleteDevice(@PathVariable(value = "deviceId") UUID deviceId) {
        return new ResponseEntity<>(deleteDeviceService.deleteDevice(deviceId), HttpStatus.OK);
    }

    @GetMapping("/devices/{deviceId}/status")
    public ResponseEntity<String> getDeviceStatus(@PathVariable(value = "deviceId") UUID deviceId) {
       return new ResponseEntity<>(getDeviceStatusService.getDeviceStatus(deviceId), HttpStatus.OK);
    }

    @PostMapping("/devices/{deviceId}/log")
    public ResponseEntity<DeviceModel> addDeviceLog(@PathVariable(value = "deviceId") UUID deviceId, @RequestBody String logMessage) {
        return new ResponseEntity<>(addDeviceLogService.addDeviceLog(deviceId, logMessage), HttpStatus.CREATED);
    }

    @GetMapping("/devices/{deviceId}/log")
    public ResponseEntity<String> getDeviceLog(@PathVariable(value = "deviceId") UUID deviceId) {
        return new ResponseEntity<>(getDeviceLogService.getDeviceLog(deviceId), HttpStatus.OK);
    }

    @PostMapping("/devices/{deviceId}/alert")
    public ResponseEntity<DeviceModel> addAlert(@PathVariable(value = "deviceId") UUID deviceId, @RequestBody String alertMessage) {
        return new ResponseEntity<>(addAlertService.addAlert(deviceId, alertMessage), HttpStatus.CREATED);
    }

    @GetMapping("/devices/{deviceId}/alert")
    public ResponseEntity<String> getDeviceAlert(@PathVariable(value = "deviceId") UUID deviceId) {
        return new ResponseEntity<>(getDeviceAlertService.getDeviceAlert(deviceId), HttpStatus.OK);
    }
}

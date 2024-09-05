package com.fullstackmonitoring.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

/**
 * DTO (Data Transfer Object) para transferência de dados de dispositivo.
 * Utilizado para criar ou atualizar dispositivos no sistema.
 *
 * @param name Nome do dispositivo.
 * @param status Status atual do dispositivo.
 * @param lastPing Timestamp do último ping recebido do dispositivo.
 * @param location Localização física do dispositivo.
 * @param logs Logs associados ao dispositivo.
 */
public record DeviceDTO(
    String name,
    @Pattern(regexp = "^(ativo|inativo|falha)$", message = "Status deve ser 'ativo', 'inativo' ou 'falha'") String status,
    String lastPing,
    String location,
    String logs,
    String alert
) {}

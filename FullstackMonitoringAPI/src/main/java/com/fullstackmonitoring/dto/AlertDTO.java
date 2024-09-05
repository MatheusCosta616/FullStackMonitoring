package com.fullstackmonitoring.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

/**
 * DTO (Data Transfer Object) para transferência de dados de alerta.
 * Utilizado para criar ou atualizar alertas no sistema.
 *
 * @param condition A condição que ativa o alerta.
 * @param message A mensagem a ser exibida quando o alerta for ativado.
 */
public record AlertDTO(
    @NotBlank String condition,
    @NotBlank String message
) {}
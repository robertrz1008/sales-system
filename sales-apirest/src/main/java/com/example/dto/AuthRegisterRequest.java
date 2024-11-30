package com.example.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;

public record AuthRegisterRequest(
        @NotBlank String username,
        @NotBlank String password,
        @NotBlank String telephone,
        @Valid AuthCreateRoleRequest roleRequest
) {
}

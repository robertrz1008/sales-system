package com.example.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"username", "message", "jwt", "status"})
public record AuthResponse(
        String usename,
        String message,
        String jwt,
        boolean status
) {
}

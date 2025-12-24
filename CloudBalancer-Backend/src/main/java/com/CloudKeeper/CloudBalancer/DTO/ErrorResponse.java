package com.CloudKeeper.CloudBalancer.DTO;


import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ErrorResponse {
        private String message;
        private String errorCode;
        private String timestamp;

    public ErrorResponse(String message, String errorCode, String timestamp) {
        this.message = message;
        this.errorCode = errorCode;
        this.timestamp = timestamp;
    }
}

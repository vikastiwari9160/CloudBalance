//package com.CloudKeeper.CloudBalancer.Interceptors;
//
//import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
//import com.CloudKeeper.CloudBalancer.Services.CustomUserDetailsService;
//import com.CloudKeeper.CloudBalancer.Utils.JwtUtils;
//import jakarta.servlet.http.Cookie;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.AllArgsConstructor;
//import org.jspecify.annotations.Nullable;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.ResponseCookie;
//import org.springframework.stereotype.Component;
//import org.springframework.web.servlet.HandlerInterceptor;
//import org.springframework.web.servlet.ModelAndView;
//
//import java.util.Date;
//
//@Component
//@AllArgsConstructor
//public class AuthInterceptor implements HandlerInterceptor {
//
//    private JwtUtils jwtUtils;
//
//    private CustomUserDetailsService userDetailsService;
//
//    @Override
//    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable ModelAndView modelAndView) throws Exception {
//        Cookie[] cookies =request.getCookies();
//        String token = null;
//        for(Cookie cookie:cookies){
//            if(cookie.getName().equals("authToken")){
//                token = cookie.getValue();
//            }
//        }
//
//        if(token!=null){
//            Date expireTime= jwtUtils.extractExpireTime(token);
//            Date currTime = new Date(System.currentTimeMillis());
//            long difference = expireTime.getTime() - currTime.getTime();
//            System.out.println(difference);
//            if(difference<=3600000){
////                18000
//                System.out.println("New token generated!!");
//                String userName = jwtUtils.extractUsername(token);
//                UserEntity user = userDetailsService.loadUserByUsername(userName);
//                String JwtToken = jwtUtils.generateToken(user.getUsername(),user.getRole());
//                ResponseCookie cookie = ResponseCookie.from("authToken",JwtToken)
//                        .httpOnly(true)
//                        .path("/")
//                        .sameSite("Lax")
//                        .build();
//                response.addHeader(HttpHeaders.SET_COOKIE,cookie.toString());
//            }
//        }
//    }
//}

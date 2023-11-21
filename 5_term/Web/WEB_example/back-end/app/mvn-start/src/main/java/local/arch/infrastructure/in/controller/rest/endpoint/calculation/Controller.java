package local.arch.infrastructure.in.controller.rest.endpoint.calculation;

import jakarta.ws.rs.Path;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;

import jakarta.ws.rs.Produces;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.QueryParam;

import local.arch.infrastructure.builder.Built;
import local.arch.application.IService;
import local.arch.application.IStorage;

@Path("/")
public class Controller {
	
	@Inject @Built
	IService service;
	
	@Context
    private HttpHeaders headers;
	
	@GET
	@Path("/calculation")
	@Produces("text/plain")
	public Response service(@QueryParam("a") String a1, 
							@QueryParam("b") String b2) 
	{
        String token = headers.getHeaderString(HttpHeaders.AUTHORIZATION).replace("Bearer ", "");
		if (!service.validateToken(token)) {
            return Response.ok("Ошибка авторизации").build();
            // resultJSON = jsonb.toJson(response);

            // return Response.status(Response.Status.UNAUTHORIZED).entity(resultJSON).build();
        }
        // String username = service.getUserInfo(token).get("login");

		
		double a = Double.parseDouble(a1);
		double b = Double.parseDouble(b2);
		String calculation = service.calculation(a, b);

		return Response.ok(calculation).build();
	}
}
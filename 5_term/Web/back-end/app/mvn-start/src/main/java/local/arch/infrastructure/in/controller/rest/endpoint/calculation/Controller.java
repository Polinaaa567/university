package local.arch.infrastructure.in.controller.rest.endpoint.calculation;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.infrastructure.builder.Built;
import local.arch.infrastructure.token.ITokenKey;

@Path("/calculation")
public class Controller {

	@Inject
	@Built
	IService service;

	@Inject
	ITokenKey usedManager;

	@GET
	@Produces("text/plain")
	public Response service(@HeaderParam("authorization") String bearerToken,
			@QueryParam("a") String a1,
			@QueryParam("b") String b2) {

		if (bearerToken == null) {
			return Response.status(Response.Status.UNAUTHORIZED).entity("Ошибка авторизации: Отсутствует токен.")
					.build();
		}

		String token = bearerToken.replace("Bearer ", "");
		if (!usedManager.validateToken(token)) {
			return Response.ok("Ошибка авторизации").build();
		}
		System.out.println("12345678");
		double number_1 = Double.parseDouble(a1);
		double number_2 = Double.parseDouble(b2);

		String calculation = service.calculate(number_1, number_2);

		return Response.ok(calculation).build();
	}
}
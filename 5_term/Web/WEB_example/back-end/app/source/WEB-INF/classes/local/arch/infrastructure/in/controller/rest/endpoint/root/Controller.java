package local.arch.infrastructure.in.controller.rest.endpoint.root;

import jakarta.ws.rs.Path;

import jakarta.ws.rs.GET;

import jakarta.ws.rs.Produces;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.QueryParam;

import javax.annotation.processing.Generated;

import local.arch.infrastructure.builder.Builder;

@Path("/")
public class Controller {

	@GET
	@Path("/")
	@Produces("text/plain")
	public Response service() {
		String reString = "OK";
		
		return Response.ok(reString).build();
	}
}
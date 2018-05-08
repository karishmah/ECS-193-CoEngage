require 'aws-sdk-s3'
require 'json'
class ApplicationController < ActionController::API
	include Response
	include ExceptionHandler

	before_action :authorize_request, :photo_storage
	attr_reader :current_user, :current_student

	private

	def photo_storage
		credentials = JSON.load(File.read('/home/devon/secrets'))
		Aws.config.update({
			region: 'US',
			endpoint: 'https://nyc3.digitaloceanspaces.com',
			credentials: Aws::Credentials.new(credentials['AccessKeyId'], credentials['SecretAccessKey'])
		})
		@static_storage = Aws::S3::Resource.new
		@static_storage_bucket = @static_storage.bucket('storage-coengage')
		
	end
	
	def authorize_request
		@current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
	end
end

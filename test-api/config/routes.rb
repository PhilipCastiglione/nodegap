Rails.application.routes.draw do
  root 'static#index'
  get '/api/test', to: 'api#test'
end

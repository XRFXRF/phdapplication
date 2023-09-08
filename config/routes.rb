Rails.application.routes.draw do
  get '/hello', to: 'welcome#hello'
  get 'welcome/hello'
end

Bad AWS connection?
`aws eks --region us-west-1 update-kubeconfig --name code-challenge`

Need to authenticate AWS? 
`aws configuration`

Checking any cloud progress at all?
- Give it time to update
- Especially when applying k8s changes from `kubectl`

K8S Commands
- `kubectl get svc`
- `kubectl get svc,deployments`
- `kubectl apply -f <folder-name>`
- `kubectl apply -f <file-name>`
- `kubectl exec --stdin --tty POD_NAME -- /bin/bash` <= To access pod shell

# IMPORTANT: Docker as a driver is bad juju
Using docker as the driver for minikube will fail you on MacOS & Windows. It isn't supported on any other OS but Linux. Since most people have linux, this is the fix:
I ran these commands with VirtualBox running.
`minikube delete`
`minikube start --driver=virtualbox --no-vtx-check`
`kubectl apply -f your-service-or-deployment.yaml`
`minikube ip` <-- To get the internal cluster IP
`Waited for the pod to create/pull docker image & accessed the application in my local browser: http://{minikube-host-ip}:{port-number}`